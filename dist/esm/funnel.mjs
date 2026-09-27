export const name="funnel";
export const id="dl_98638a512ed84237bcf7";
export const url=new URL("../icons/funnel.svg?v=073ae4bacedbf7a1e9651d779fd070f705bab6de51afbf0361d3ae1e94099a6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
