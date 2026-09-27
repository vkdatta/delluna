export const name="tilde-thin";
export const id="dl_e4b3ae4a03edf872732b";
export const url=new URL("../icons/tilde-thin.svg?v=77bbff1c54fdfa5a66f0d67e7c6c66e1e5fa72dffedaf451d29454cef5147928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
