export const name="15mp";
export const id="dl_072f6cde2e96c14593bd";
export const url=new URL("../icons/15mp.svg?v=9da358563d6bad205d052fe05964376357dd048fc86c879295fdf4c79477f649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
