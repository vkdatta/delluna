export const name="gps-bold";
export const id="dl_4a08d360528d4693ac39";
export const url=new URL("../icons/gps-bold.svg?v=c28342a51a39bfc1d0b21a9211ddb90b31910602e5c33b768ba9f971a93d591f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
