export const name="arrow_circle_up";
export const id="dl_179a629a71bb4d9f95f2";
export const url=new URL("../icons/A/arrow_circle_up.svg?v=141685468cc9a2d674811d4da50e76b7b3f2908cc2bfba6755315f5e94383009",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
