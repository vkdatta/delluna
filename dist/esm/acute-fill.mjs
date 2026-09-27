export const name="acute-fill";
export const id="dl_f1135cbb86bbc99467f5";
export const url=new URL("../icons/acute-fill.svg?v=4530ab51f1ac6fd8a331c0fb091061ef56e4b9de14cff0090084d659655af5ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
