export const name="phone-light";
export const id="dl_9b1048c077f74257b87d";
export const url=new URL("../icons/phone-light.svg?v=1264578a0558ae059629d1c764cc3f163bb7c409652865ddc5b72794f45b01b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
