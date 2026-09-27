export const name="lucid_2-dollar-sign";
export const id="dl_b9326036c0a343b2bec5";
export const url=new URL("../icons/lucid_2-dollar-sign.svg?v=d68b404b99bfc588fa4559dfd29b4d2d93272fff71fdfc7d8071904a2ec6568f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
