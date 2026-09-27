export const name="brackets-curly-bold";
export const id="dl_a4ba393c0042471aa1f9";
export const url=new URL("../icons/brackets-curly-bold.svg?v=42f83854dd39391f8666e13070efde8bf9eec8ffa27cb033f6077ff545d2e8d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
