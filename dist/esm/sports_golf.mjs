export const name="sports_golf";
export const id="dl_298ee139320236ed727a";
export const url=new URL("../icons/sports_golf.svg?v=8d0a582f930a8ef3942f8635039997cbd2d7d586b8b9852c06dda25a758304f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
