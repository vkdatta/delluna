export const name="tent-fill";
export const id="dl_3a0956628cba73402b17";
export const url=new URL("../icons/tent-fill.svg?v=db8c3ac8445e97a71382386ed35317cfd255440a6ffa6ce1907aba66b5f6ab11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
