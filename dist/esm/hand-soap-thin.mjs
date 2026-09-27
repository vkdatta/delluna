export const name="hand-soap-thin";
export const id="dl_81c8d6467ca6479895c0";
export const url=new URL("../icons/hand-soap-thin.svg?v=49e05ffb2dbd4a341e1bee5ee521392032d5bf169ae50af44989232a1560d3e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
