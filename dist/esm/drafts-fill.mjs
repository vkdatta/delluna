export const name="drafts-fill";
export const id="dl_a59acbb07dc6481fb0ec";
export const url=new URL("../icons/drafts-fill.svg?v=f9e5b3a05455ee7189e437c02532b5e4a023b713ca142616fbd75351bc347e6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
