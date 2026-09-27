export const name="conversion_path_off";
export const id="dl_5532b52393ebbff5a452";
export const url=new URL("../icons/conversion_path_off.svg?v=2fa2137fdf67849568578aafd5c5cd4594cac12ef51c6fcf68a691d0f48076f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
