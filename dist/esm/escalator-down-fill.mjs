export const name="escalator-down-fill";
export const id="dl_182845e62f284bcdb36f";
export const url=new URL("../icons/escalator-down-fill.svg?v=3eca923d4618a4d6ef72d84cc92cf41bf93ef17adf9c5fecb768ed069b1eb3c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
