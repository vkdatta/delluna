export const name="shrimp-fill";
export const id="dl_74727f8976e62e85ae17";
export const url=new URL("../icons/shrimp-fill.svg?v=b00445e6ec5664eb51fad845bbd4fb5edb0a2c4fc8408afc2daa8422b6400946",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
