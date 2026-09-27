export const name="gavel-thin";
export const id="dl_bbaf0f7f020a458db565";
export const url=new URL("../icons/gavel-thin.svg?v=6fc9bae308ee18ac24e57a1b438ddb9ea84f1e2dec49b520ba55d849dfdfd54e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
