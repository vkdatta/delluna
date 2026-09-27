export const name="theater_comedy";
export const id="dl_2f3477581313602d9fcb";
export const url=new URL("../icons/theater_comedy.svg?v=2f6257f6a3e213dd1666c9a70bf26266dfaa089e0e11b13e37e89fb1ca6dfd8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
