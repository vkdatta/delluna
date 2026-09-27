export const name="horizontal_split-fill";
export const id="dl_89f465a21cc46e8bf08d";
export const url=new URL("../icons/horizontal_split-fill.svg?v=49bd3f287f4be10be69b1dd35ed66436f79b06cd8853adecd56a5ac6152fdf23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
