export const name="summarize";
export const id="dl_996b9928bfbc4b8a8662";
export const url=new URL("../icons/summarize.svg?v=46095b8896717042cb5c2f7424f70f9a8d1d9bb55bdbf6667345058374140585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
