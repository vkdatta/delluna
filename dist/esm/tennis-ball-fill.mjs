export const name="tennis-ball-fill";
export const id="dl_965197a68f445c8aa6ba";
export const url=new URL("../icons/tennis-ball-fill.svg?v=058895e1713da5ce99bad93dceaa6885314019989a976d44b5cf324b3c48c1fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
