export const name="publish-fill";
export const id="dl_63131252506a9f1f9df2";
export const url=new URL("../icons/publish-fill.svg?v=abf45ca30545a3ddafac87d261a4235e3ef616ea448438990bb28def88c565ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
