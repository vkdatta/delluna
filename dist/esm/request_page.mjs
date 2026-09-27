export const name="request_page";
export const id="dl_3c1ff10db0da14fce107";
export const url=new URL("../icons/request_page.svg?v=4c8953e2809c92814fc9d3f5af411ff0240e0dc90697825093caf02f7c1ed157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
