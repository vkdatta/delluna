export const name="blinds";
export const id="dl_de091ddb02a44549ae93";
export const url=new URL("../icons/B/blinds.svg?v=a97ae067acc29cd3d7525fbba806fcfc6f88aad032d1a1b16e60baf23cfeeae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
