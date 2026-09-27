export const name="pencil-simple-slash";
export const id="dl_06ba757a13fb45478dda";
export const url=new URL("../icons/pencil-simple-slash.svg?v=da5a30b0636d0954c3764c2a30c734cb89708cbcb05e78bc4192338a59c9fcea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
