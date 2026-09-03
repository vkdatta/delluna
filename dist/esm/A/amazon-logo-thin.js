export const name="amazon-logo-thin";
export const id="dl_b80442ffaa56423c986e";
export const url=new URL("../../icons/A/amazon-logo-thin.svg?v=0003f8fd866600e2481b2d51a0b1f52e8268b95cfb675e9ae0df2f32bc3b9f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
