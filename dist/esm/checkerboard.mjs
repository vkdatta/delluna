export const name="checkerboard";
export const id="dl_dd1b31668f4e438ab74e";
export const url=new URL("../icons/checkerboard.svg?v=2a04344fb52f47f59714c84064475d4b87e9abbecbb05035040f4e8b42205882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
