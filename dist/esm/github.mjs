export const name="github";
export const id="dl_220b208a426f4ba88717";
export const url=new URL("../icons/icons-svg/github.svg?v=8d99ce69012a280ac5339a869a1647e7b4b48d1bd2105e94b22e35996df48736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
