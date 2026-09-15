export const name="biotech-fill";
export const id="dl_6b864157248f471bb51c";
export const url=new URL("../icons/B/biotech-fill.svg?v=9e146b349cbed0b22965ea3fea91a79e556cae9054746831e8672a01557989c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
