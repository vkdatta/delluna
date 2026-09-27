export const name="more_horiz-fill";
export const id="dl_bd0c52f0f018d3f2a4f6";
export const url=new URL("../icons/more_horiz-fill.svg?v=08d2ec4fc42a620335428a9f8e0f58561f6b3d166f5086dc902120580a686ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
