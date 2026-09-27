export const name="eject-simple-thin";
export const id="dl_61806565806d40aabc8e";
export const url=new URL("../icons/eject-simple-thin.svg?v=4b9cb559fd6e5c89827ab462cf0ae76773c0c963f71306c111c73191540d7efe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
