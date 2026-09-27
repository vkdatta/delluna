export const name="text-align-justify";
export const id="dl_6965a67137ce4b0192e4";
export const url=new URL("../icons/text-align-justify.svg?v=86734fe1944cc5ed3ce24415d172e1d76961e18e9eecfceaabf3e709e912eea7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
