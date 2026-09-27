export const name="picture-in-picture-thin";
export const id="dl_403a6decceff41febed9";
export const url=new URL("../icons/picture-in-picture-thin.svg?v=d501ac9729fa109f401783322ff66f085de91e53614c2cd7388c1a90984d9710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
