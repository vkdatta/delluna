export const name="pencil-simple-slash";
export const id="dl_06ba757a13fb45478dda";
export const url=new URL("../icons/pencil-simple-slash.svg?v=2cf6f08673562b429ad4c41ee392b9981a3c2e69454ce67b3376c95cb954bc18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
