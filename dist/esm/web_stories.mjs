export const name="web_stories";
export const id="dl_63b9c4509c8b4382ad04";
export const url=new URL("../icons/W/web_stories.svg?v=72c58b1301fb1d9cb262bd3362065424a7acff1055fb046d309ac66e0c9d65e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
