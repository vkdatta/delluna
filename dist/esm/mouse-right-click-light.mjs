export const name="mouse-right-click-light";
export const id="dl_68ee0c3bbf9a49afb03b";
export const url=new URL("../icons/mouse-right-click-light.svg?v=ccf89500fdd8b4e0af4c47925dc76b1e461a0ef9f04f3477c8cac69d918857bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
