export const name="stack-minus-duotone";
export const id="dl_b8edc8177f97419681a7";
export const url=new URL("../icons/S/stack-minus-duotone.svg?v=f9481d80d494ab87558b156eae717a1b24e54dececa48204a83428f4f9a5f818",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
