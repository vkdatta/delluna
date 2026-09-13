export const name="jump_to_element";
export const id="dl_bebece9f4e2f4bf28a2d";
export const url=new URL("../icons/J/jump_to_element.svg?v=61f4f32d227d16ca89fb9ec0a1b164869fbe7925dc99f47639e10caccc2814a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
