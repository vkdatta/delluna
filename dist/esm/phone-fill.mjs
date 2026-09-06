export const name="phone-fill";
export const id="dl_57585cec892b47c8bef3";
export const url=new URL("../icons/phone-fill.svg?v=4546c9d7d0a26f08ec5a35f2ca3e12d8ef76767ba60c2effa6f214d7f070dcb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
