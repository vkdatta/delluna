export const name="shopping-bag-open-thin";
export const id="dl_2e94d142bf8962fcf501";
export const url=new URL("../icons/shopping-bag-open-thin.svg?v=ad23784fda2e9c77e26e27d37cd923089b5419c08cb34762248fb8788e943f1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
