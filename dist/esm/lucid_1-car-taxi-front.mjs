export const name="lucid_1-car-taxi-front";
export const id="dl_5b980de3ac9147c799c4";
export const url=new URL("../icons/lucid_1-car-taxi-front.svg?v=bec600535c1b153019902f29bd8612307b1474565706b6b7dcf748b794e293d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
