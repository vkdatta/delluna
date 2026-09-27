export const name="pi";
export const id="dl_a1104b5f8f7d4ed096c8";
export const url=new URL("../icons/pi.svg?v=8fd33ac7123f9f9264ba0ccaf74c4032b627ae3f80d745ef2d9d7db6885572f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
