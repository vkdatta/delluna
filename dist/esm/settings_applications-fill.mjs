export const name="settings_applications-fill";
export const id="dl_d44f4db8fa0270af758d";
export const url=new URL("../icons/settings_applications-fill.svg?v=10250b282c4317f6e2f5b6a5af7f225036e40a8605fb24250e97d353b4285698",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
