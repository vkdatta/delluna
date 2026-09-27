export const name="headset-light";
export const id="dl_5ed172f147164bbf8e02";
export const url=new URL("../icons/headset-light.svg?v=fa0a247ee5b7be83b236de5f67f2d322fdabcc4854cbab10f9a294f82c56a4f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
