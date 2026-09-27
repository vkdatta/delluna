export const name="assignment_globe";
export const id="dl_ed0586388365b651326e";
export const url=new URL("../icons/assignment_globe.svg?v=f2413537360df2b7cfc44dff328f200feda2e84c005aec17be0a939498a7c296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
