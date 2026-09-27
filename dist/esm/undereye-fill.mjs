export const name="undereye-fill";
export const id="dl_01b2aeaf16ff290ef0dc";
export const url=new URL("../icons/undereye-fill.svg?v=ee58f0b597f8f2331e746bee70914d724aecb39948d7878937db622144851877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
