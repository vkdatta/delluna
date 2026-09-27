export const name="escalator-down-duotone";
export const id="dl_b7277fd3e3784c24918d";
export const url=new URL("../icons/escalator-down-duotone.svg?v=b09560a88845e724f42a03442c8d130f0787014253f029ff07e4dd8ddeb773ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
