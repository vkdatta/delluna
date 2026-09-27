export const name="fish-simple-bold";
export const id="dl_91bdd70ee76d42eb80ae";
export const url=new URL("../icons/fish-simple-bold.svg?v=d73adc9bdb98911ec338cf355e272a3b2c7bcbc4d1bfd6bd03612665b6593ad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
