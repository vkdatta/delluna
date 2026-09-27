export const name="speaker-slash-thin";
export const id="dl_85025eb1ca29b6c7fdb5";
export const url=new URL("../icons/speaker-slash-thin.svg?v=7e2ef5960d1dee39a18e9b20455dd2e1181439215da8f605245829dfcc9f79f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
