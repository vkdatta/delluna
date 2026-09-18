export const name="pan_tool_alt";
export const id="dl_201078007aec454691ab";
export const url=new URL("../icons/pan_tool_alt.svg?v=6ed21e54d47140a2e8f98c7eb5610aca9913907692b3cc4e30bddaa824dfe246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
