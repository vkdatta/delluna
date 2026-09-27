export const name="cloud-slash-light";
export const id="dl_7361c558a9504d2b9adf";
export const url=new URL("../icons/cloud-slash-light.svg?v=0002cc723eac9364c17a0ece9168cfac39da9e4161e5396ead5313f288ef4ea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
