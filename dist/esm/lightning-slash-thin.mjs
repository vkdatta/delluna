export const name="lightning-slash-thin";
export const id="dl_5d70a186f70e466b950c";
export const url=new URL("../icons/lightning-slash-thin.svg?v=0407afeb58d3bb750c17be1ea5fac1fcdd1cef50eb04ecf61c4c4c2f08d23284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
