export const name="headset-light";
export const id="dl_5ed172f147164bbf8e02";
export const url=new URL("../icons/headset-light.svg?v=79e2e696f4d58cd3a1cc3f5e0e1e1efeab4c10329fbafa390dfdeb1f1631158b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
