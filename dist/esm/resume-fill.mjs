export const name="resume-fill";
export const id="dl_259327ff8dbc487fbea4";
export const url=new URL("../icons/resume-fill.svg?v=5f03922758095653783516e171a567a18c55b8dd50e5c2197a3b397b8077f74b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
