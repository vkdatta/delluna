export const name="dropbox-logo";
export const id="dl_d0470d71fb6e4409ad4d";
export const url=new URL("../icons/dropbox-logo.svg?v=22769630c9fb42b6a69e3959cceb97984dfa10b168e218f2a9a6463f0c67f93d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
