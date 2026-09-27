export const name="stacked_email";
export const id="dl_6f22faa0635578ac65e7";
export const url=new URL("../icons/stacked_email.svg?v=d6f28157b55d86a5b591b4c3840bd4f8159ac04f10a3139f65f3e94deb428126",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
