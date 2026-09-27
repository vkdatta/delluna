export const name="lucid_2-folder-pen";
export const id="dl_40efd0df2ecb40969074";
export const url=new URL("../icons/lucid_2-folder-pen.svg?v=02d6109c1c3e03123758bc6da62720e85cf1ea3a614f60beff26ef0e410e5c35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
