export const name="view_comfy_alt";
export const id="dl_367ed777f48bc2af408f";
export const url=new URL("../icons/view_comfy_alt.svg?v=a0968fe70dd3662401adff48eca2459ad8f9388e863972f93f3d3f9be509bf06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
